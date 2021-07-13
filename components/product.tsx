import React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import Storage from "../services/storage";

export interface product {
  colour: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export function Product(props: product) {
  const addTroller = (item: product) => {
    Storage.getAllDataForKey("troller").then((troller) => {
      if (troller.length > 0) {
        let found = troller.find((obj) => item.id === obj.id);
        if (found) {
          Storage.save({
            key: "troller",
            id: String(item.id),
            data: { ...item, ...{ quant: found.quant + 1 } },
            expires: null,
          });
        } else {
          Storage.save({
            key: "troller",
            id: String(item.id),
            data: { ...item, ...{ quant: 1 } },
            expires: null,
          });
        }
      } else {
        Storage.save({
          key: "troller",
          id: String(item.id),
          data: { ...item, ...{ quant: 1 } },
          expires: null,
        });
      }
    });
  };

  return (
    <Card>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>
          Price £{props.price} - Color {props.colour}
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.img }} />
      <Card.Actions>
        <Button onPress={() => addTroller(props)}>Buy</Button>
      </Card.Actions>
    </Card>
  );
}
