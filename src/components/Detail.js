import React from 'react'
import { Button, Stack, Typography } from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart
    },
    {
      icon: TargetImg,
      name: target
    },
    {
      icon: EquipmentImg,
      name: equipment
    }
  ]

  return (
    <Stack
      gap='60px'
      sx={{flexDirection: {lg: 'row'}, p:'20px', alignItems:'center'}}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-imgage'/>
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. {name} {` `}
          is one of the best exercise to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.icon} direction='row' gap='24px' alignItems='center'> 
          {/* {console.log("this issssss item: ",item)} */}
            <Button sx={{ background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
              <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}} />
            </Button>
            <Typography textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail

// import React from 'react';
// import { Typography, Stack, Button } from '@mui/material';

// import BodyPartImage from '../assets/icons/body-part.png';
// import TargetImage from '../assets/icons/target.png';
// import EquipmentImage from '../assets/icons/equipment.png';

// const Detail = ({ exerciseDetail }) => {
//   const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

//   const extraDetail = [
//     {
//       icon: BodyPartImage,
//       name: bodyPart,
//     },
//     {
//       icon: TargetImage,
//       name: target,
//     },
//     {
//       icon: EquipmentImage,
//       name: equipment,
//     },
//   ];

//   return (
//     <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
//       <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
//       <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
//         <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
//           {name}
//         </Typography>
//         <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
//           Exercises keep you strong.{' '}
//           <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
//           of the best <br /> exercises to target your {target}. It will help you improve your{' '}
//           <br /> mood and gain energy.
//         </Typography>
//         {extraDetail?.map((item) => (
//           <Stack key={item.name} direction="row" gap="24px" alignItems="center">
//             <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
//               <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
//             </Button>
//             <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
//               {item.name}
//             </Typography>
//           </Stack>
//         ))}
//       </Stack>
//     </Stack>
//   );
// };

// export default Detail;

