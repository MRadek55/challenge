import { useMutation, useQuery } from '@apollo/client';
import { BlurView } from '@react-native-community/blur';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { Portal } from 'react-native-portalize';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_CARD,
  DELETE_CARD,
  DUPLICATE_CARD,
  GET_CARDS,
  SHARE_CARD,
} from '../../api/cards';
import AddItemButton from '../../components/AddItemButton/AddItemButton';
import Item from '../../components/Item/Item';
import {
  CreateItemResponse,
  ItemProps,
} from '../../components/Item/Item.types';
import SelectedItem from '../../components/SelectedItem/SelectedItem';
import SingInScreenWrapper from '../../components/SingInScreenWrapper/SingInScreenWrapper';
import { FOOTER_HEIGHT } from '../../components/SingInScreenWrapper/SingInScreenWrapper.styles';
import { removeFromList, saveList } from '../../store/cardsSlice';
import { RootState } from '../../store/store';
import styles from './HomeScreen.styles';
import Share from 'react-native-share';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, loading, refetch } = useQuery(GET_CARDS, {});
  const [selected, setSelected] = useState<number>();
  const { list } = useSelector((state: RootState) => state.cards);
  const [createCard] = useMutation<CreateItemResponse>(CREATE_CARD, {
    onCompleted: ({ createCard: card }) => {
      const { id, name } = card;
      dispatch(saveList([...list, { id, name }]));
    },
  });
  const [shareCard] = useMutation<{ shareCard: string }>(SHARE_CARD, {
    onCompleted: ({ shareCard: code }) => onCompletedGetShareCard(code),
  });
  const [duplicateCard] = useMutation(DUPLICATE_CARD, {
    onCompleted: () => {
      refetch();
      setSelected(undefined);
    },
  });
  const [deleteCard] = useMutation(DELETE_CARD, {
    onCompleted: () => {
      selected && dispatch(removeFromList(selected));
      setSelected(undefined);
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(saveList(data.cards));
    }
  }, [data, dispatch]);

  const handleOnDelete = (item: ItemProps) => {
    Alert.alert(t('cards:deleteWarnTitle'), t('cards:deleteWarnInfo'), [
      {
        text: t('delete'),
        style: 'destructive',
        onPress: () =>
          deleteCard({
            variables: { id: item.id },
          }),
      },
      { text: t('cancel') },
    ]);
  };

  const handleOnShare = async (item: ItemProps) => {
    await shareCard({ variables: { id: item.id } });
  };

  const addButtonContent = useMemo(
    () => (
      <View style={styles.wrapper}>
        <AddItemButton
          onPress={() =>
            createCard({
              variables: { id: +new Date(), name: 'Hello from challenge!' },
            })
          }
        />
      </View>
    ),
    [createCard],
  );

  const onCompletedGetShareCard = async (shareCode: string) => {
    const link = `https://cards.foodstyles.com/${shareCode}`;
    const shareOptions = {
      title: `Here is our link: ${link}!`,
      failOnCancel: false,
      urls: [link],
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const addButtonJSX = useMemo(
    () => (selected ? addButtonContent : <Portal>{addButtonContent}</Portal>),
    [selected, addButtonContent],
  );

  const renderItem = (item: ItemProps) => {
    const isActive = selected === item.id;

    return isActive ? (
      <SelectedItem
        onDelete={handleOnDelete}
        onDuplicate={() => duplicateCard({ variables: { id: item.id } })}
        onShare={handleOnShare}
        onClose={() => setSelected(undefined)}
        {...item}
      />
    ) : (
      <Item onPress={() => setSelected(item.id)} {...item} />
    );
  };

  return (
    <>
      <SingInScreenWrapper withLogo isLoading={loading}>
        <FlatList
          data={list}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            paddingBottom: FOOTER_HEIGHT * 2,
          }}
        />
        {addButtonJSX}
      </SingInScreenWrapper>
      {!!selected && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      )}
    </>
  );
};

export default HomeScreen;
