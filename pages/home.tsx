import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

import API from "../services/restapi";
import { product, Product } from "../components/product";

export default function Home() {
  const [productList, setProductList] = useState<Array<product>>([]);

  useEffect(() => {
    API.getProduct().then((item) => {
      if (item) {
        setProductList(item);
      } else {
        setProductList([]);
      }
    });
  });

  return (
    <View style={styles.container}>
      {productList?.length > 0 ? (
        productList?.map((item: product, index) => {
          return <Product {...item} key={index} />;
        })
      ) : (
        <Title>Loading products ... </Title>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
