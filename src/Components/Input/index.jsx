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
import RNPickerSelect from 'react-native-picker-select';
import {style} from './style';
import DropDown from '../DropDown';

const Input = ({
  label,
  icon,
  placeholder,
  onChangeText = () => {},
  isMobileNumber,
  value = '',
}) => {
  const items = [
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'TypeScript', value: 'TypeScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
    {label: 'C++', value: 'C++'},
    {label: 'C', value: 'C'},
  ];

  return (
    <View style={style.Container}>
      {label ? <Text style={style.labelText}>{label}</Text> : null}
      <Pressable style={style.InputContainer}>
        {icon ? (
          <View>
            <Image source={icon} style={style.InputIcon} />
          </View>
        ) : isMobileNumber ? (
          <DropDown />
        ) : null}
        {!isMobileNumber ? (
          <TextInput placeholder={placeholder} style={style.input} />
        ) : (
          <TextInput
            placeholder={placeholder}
            keyboardType="numeric"
            style={style.input}
            onChangeText={onChangeText}
            value={value}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Input;
