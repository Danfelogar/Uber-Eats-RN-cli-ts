import { View, Text, TouchableOpacity, Modal, } from 'react-native';
import React from 'react'
import { singleBusiness } from '../../interfaces/interfaces';
import { useDetail } from '../../hooks/useDetail';

const ViewCartBtn = ( props: singleBusiness) => {

    const { modalShow, setModalShow, totalUSD, checKoutModalContent } = useDetail();

    return (
        <>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalShow}
            onRequestClose={() => setModalShow(false)}
        >
            {checKoutModalContent()}
        </Modal>
            {totalUSD != '$0.00' &&
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                , position: 'absolute', bottom: 17, zIndex: 3}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <TouchableOpacity onPress={()=> setModalShow(true)} style={{ marginTop: 20, backgroundColor: 'black', alignItems: 'center', padding: 15, borderRadius: 30, width: 300, position: 'relative'}}>
                            <Text style={{ color: 'white', fontSize: 20}}>View Cart {totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )
}

export default ViewCartBtn