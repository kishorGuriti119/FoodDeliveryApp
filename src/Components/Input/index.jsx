// import React from 'react';
// import {Pressable, Text, TextInput, View, Image} from 'react-native';
// import {style} from './style';

// const Input = ({
//   label,
//   icon,
//   placeholder,
//   onChangeText = () => {},
//   isMobileNumber,
// }) => {
//   return (
//     <View style={style.Container}>
//       {label ? <Text style={style.lableText}>{label}</Text> : null}
//       <Pressable style={style.InputContainer}>
//         {icon ? (
//           <View>
//             <Image source={icon} style={style.InputIcon} />
//           </View>
//         ) : null}
//         {!isMobileNumber ? (
//           <TextInput placeholder={placeholder} style={style.input} />
//         ) : (
//           <View>
//             <TextInput
//               placeholder={placeholder}
//               keyboardType="numeric"
//               style={style.input}
//             />
//           </View>
//         )}
//       </Pressable>
//     </View>
//   );
// };

// export default Input;

import React from 'react';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
import {style} from './style';
import DropDown from '../DropDown';

const Input = ({
  label,
  icon,
  isPassword,
  placeholder,
  onChangeText = () => {},
  isMobileNumber,
  value = '',
}) => {
  return (
    <View style={style.Container}>
      {label ? <Text style={style.labelText}>{label}</Text> : null}
      <Pressable style={style.InputContainer}>
        {icon && !isPassword ? (
          <View>
            <Image source={icon} style={style.InputIcon} />
          </View>
        ) : isMobileNumber ? (
          <DropDown />
        ) : null}
        {!isMobileNumber ? (
          <TextInput
            placeholder={placeholder}
            style={style.input}
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            keyboardType="numeric"
            style={style.input}
            onChangeText={onChangeText}
            maxLength={10}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Input;
