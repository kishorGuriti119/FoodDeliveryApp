import CircularProgress from 'react-native-circular-progress-indicator';
import { Svg, Circle } from 'react-native-svg';
import { colors } from '../../Utility/Colors';

const ProfileProgressCircular = () => {

    return (
      <>
        <CircularProgress
         showProgressValue={false}
         value={50}
         activeStrokeColor= {colors.primary}
         activeStrokeWidth={8}
         inActiveStrokeWidth={0}
         startAngle={90}
         rotation={90}
         radius={60}
        />   
      </>
    );
  };
  
  
  export default ProfileProgressCircular;