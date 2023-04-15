import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar.js'; 
import Loader from './Loader.js';



// const HorizontalScrollbar = ({ data, bodyPart, setBodypart }) => {

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}}}>
    {/* <Box border='2px solid black' style={{background:'black'}} sx={{mt: {lg:'100px', xs:'0'}}}> */}
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' paddingBottom='16px' sx={{p:'2px', position:'relative'}}>
        {/* {console.log('targetMuscleExercisessssssssss: ' ,targetMuscleExercises)} */}
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} isSec="true"/> : <Loader />}
      </Stack>

      <Typography variant='h3' paddingBottom='16px' mb={5}>Exercises with similar equipment</Typography>
      <Stack direction='row' sx={{p:'2px', position:'relative'}}>
        {/* {console.log('targetMuscleExercisessssssssss: ' ,equipmentExercises)} */}
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} isSec="true"/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises