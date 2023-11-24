import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {style} from './style';
import {Icons} from '../../Utility/Icons';

const InterfaceHeader = ({
  dashboardIcon,
  orderpreview,
  title,
  location,
  notifications,
  logout,
  PreviousPage,
  myStyle,
  locationCustomstyle,
  onPress,
  HandleDashboard,
  onNotification,
  onBackPress,
}) => {
  return (
    <View style={style.headerContainer}>
      {dashboardIcon ? (
        <Pressable onPress={HandleDashboard} hitSlop={20}>
          <Image source={Icons.dashboard_Icon} style={style.headerIcon} />
        </Pressable>
      ) : PreviousPage ? (
        <Pressable
          hitSlop={20}
          style={[style.backArrowContainer, myStyle]}
          onPress={onBackPress}>
          <Image
            source={
              orderpreview ? Icons.direction_left_black : Icons.direction_left
            }
            style={style.backArrow}
          />
        </Pressable>
      ) : null}

      {title && location ? (
        <Pressable style={[style.location, locationCustomstyle]}>
          <Image
            source={orderpreview ? Icons.location_white : Icons.location_mark}
            style={style.locationIcon}
          />
          <Text
            style={
              orderpreview ? style.customLocationText : style.locationText
            }>
            {title}
          </Text>
        </Pressable>
      ) : (
        <Text></Text>
      )}

      {notifications ? (
        <Pressable onPress={onNotification}>
          <Image
            source={orderpreview ? Icons.gmail_white : Icons.email_outline}
            style={style.headerIcon}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default React.memo(InterfaceHeader);
