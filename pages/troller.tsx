import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Storage from "../services/storage";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export default function Troller() {
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    Storage.getAllDataForKey("troller")
      .then((troller) => {
        troller ? setProductList(troller) : setProductList([]);
      })
      .catch((err) => {
        setProductList([]);
      });
  });

  const removeTroller = (item: any) => {
    if (item.quant > 1) {
      Storage.save({
        key: "troller",
        id: String(item.id),
        data: { ...item, ...{ quant: item.quant - 1 } },
        expires: null,
      });
    } else {
      Storage.remove({
        key: "troller",
        id: String(item.id),
      });
    }
  };

  return (
    <View style={styles.container}>
      {productList?.length > 0 ? (
        productList?.map((item: any, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>
                  Price £{item.price} - Color {item.colour}
                </Paragraph>
                <Title>Quant: {item.quant}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: item.img }} />
              <Card.Actions>
                <Button onPress={() => removeTroller(item)}>Remove</Button>
              </Card.Actions>
            </Card>
          );
        })
      ) : (
        <Title>Troller empty</Title>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
