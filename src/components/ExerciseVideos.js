import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const ExerciseVideos = ({ exerciseVideos, name }) => {
  if(!exerciseVideos) return 'Loadnig...';
  else console.log('exerciseVideosssssssssss', exerciseVideos)
  
  return (
    <Box sx={{marginTop: {lg:'200px', xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack  display='flex' justifyContent='space-around' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: {lg:'row'},
          gap:{lg:'110px', xs:'0'}
        }}
      >
        {exerciseVideos?.slice(0,6).map((item, index) => (
        <Box className='exercise-video-card'>
          <a 
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' }, ml:'10px' }} fontWeight={600}  color="#000">
                {item.video.title.slice(0,40)}...
              </Typography>
              <Typography ml='10px' fontSize="14px" display='flex' justifyContent='space-between' color="#ff8b8b">
                {item.video.channelName}
                <Typography fontSize="14px" style={{color:'#ff8b8b', textAlign:'right'}} >
                  {item.video.viewCountText}
                </Typography>
              </Typography>
            </Box>
          </a>
        </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos