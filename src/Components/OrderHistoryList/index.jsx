import { View, FlatList, Pressable, } from 'react-native'
import React from 'react'
import ShowFlatList from '../ShowFlatList'
import { Button, Card, Chip, Divider, Text } from 'react-native-paper'
const OrderHistoryList = ({ data }) => {

    const OrderCard = ({ item }) => {
        console.log(item)
        return (
            <Card style={{ margin: 5 }}>
                <Card.Content>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: 170, alignItems: "center", }}>
                        <Text variant="bodyLarge">{item.restaurantId}</Text>
                        <Chip type="flat" style={{ margin: 5 }}><Text variant="bodyMedium">{item.status}</Text></Chip>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: 170, alignItems: "center", }}>
                        <Text variant="bodyLarge">{item.restaurantId}</Text>
                        <Chip type="flat" style={{ margin: 5 }}><Text variant="bodyMedium">{item.status}</Text></Chip>
                    </View>
                </Card.Content>
                <Divider/>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",padding:8 }}>
                    <Button mode="contained-tonal" onPress={() => console.log('Pressed')}>
                        REORDER
                    </Button>
                    <Button mode="contained-tonal" onPress={() => console.log('Pressed')}>
                        RATEORDER
                    </Button>
                </View>
            </Card>
        )
    }


    return (
        <View>
            <FlatList
                data={data}
                style={{ marginVertical: 24 }}
                horizontal="false"
                renderItem={OrderCard}
                keyExtractor={(item, index) => index}
            />

        </View>
    )
}

export default OrderHistoryList