// // src/components/ProgressReportCard.tsx
// import React from 'react';
// import { TextField, Box, Typography, Grid, TextareaAutosize, Input, Container } from '@mui/material';

// const ProgressReportCard = () => {
//   return (
//     <Container maxWidth="lg" sx={{ backgroundColor: '#f9f9f9', padding: 4, borderRadius: 2 }}>
//       <Typography variant="h4" marginBottom={4}>Progress Report Card</Typography>
//       <Grid container spacing={2} marginBottom={4}>
//         <Grid item xs={4}>
//           <TextField label="Name of Child" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={4}>
//           <TextField label="Class" variant="outlined" fullWidth />
//         </Grid>
//         <Grid item xs={4}>
//           <TextField label="Roll No." variant="outlined" fullWidth />
//         </Grid>
//       </Grid>

//       <Box>
//         <Grid container spacing={2} textAlign="center" fontWeight="bold">
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white' }}>SUBJECTS</Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white' }}>TERM I</Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white' }}>TERM II</Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white' }}>FINAL TERM</Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white', borderLeft: '4px solid blue' }}>AVERAGE</Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'blue', color: 'white' }}>TEACHER SAYS</Grid>
//         </Grid>

//         {["English Reading", "English Recitation", "English Dictation", "English Language Written", "Hindi Reading", "Hindi Recitation", "Hindi Language Written", "Number Work Oral", "Number Work Written", "Story Telling", "General Knowledge", "Conversation", "Computer [Oral]", "Drawing and Colouring", "Art and Craft"].map((subject, index) => (
//           <Grid container spacing={2} key={index}>
//             <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>{subject}</Grid>
//             <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//             <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//             <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//             <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//             {index < 4 ? (
//               <Grid item xs={2}>
//                 <TextareaAutosize minRows={3} placeholder={`TERM ${index + 1}:`} style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }} />
//               </Grid>
//             ) : null}
//           </Grid>
//         ))}

//         <Grid container spacing={2} sx={{ borderColor: 'red', borderWidth: '1px', borderStyle: 'solid' }}>
//           <Grid item xs={2} sx={{ bgcolor: 'green' }}>GRADE</Grid>
//           <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//           <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//           <Grid item xs={2}><TextField variant="outlined" fullWidth /></Grid>
//           <Grid item xs={2}><TextField variant="outlined" fullWidth sx={{ borderLeft: '4px solid blue' }} /></Grid>
//           <Grid item xs={2} sx={{ bgcolor: 'orange' }}>
//             <Typography variant="body2">100% to 90% - A+ - Excellent</Typography>
//             <Typography variant="body2">89% to 80% - A - Very Good</Typography>
//             <Typography variant="body2">79% to 65% - B+ - Good</Typography>
//             <Typography variant="body2">64% to 50% - B - Fair</Typography>
//             <Typography variant="body2">49% to 40% - C+ - Can do better</Typography>
//             <Typography variant="body2">Less than 40% - C - Needs to improve</Typography>
//           </Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Attendance</Grid>
//           <Grid item xs={10}><TextField variant="outlined" fullWidth /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Class Teacher's Sign</Grid>
//           <Grid item xs={10}><Input type="file" /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Principal/Director Sign</Grid>
//           <Grid item xs={10}><Input type="file" /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Parent's Sign</Grid>
//           <Grid item xs={10}><Input type="file" /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Promoted to</Grid>
//           <Grid item xs={10}><TextField variant="outlined" fullWidth /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>School re-opens on</Grid>
//           <Grid item xs={10}><TextField variant="outlined" fullWidth /></Grid>
//         </Grid>

//         <Grid container spacing={2}>
//           <Grid item xs={2} sx={{ bgcolor: 'yellow' }}>Time</Grid>
//           <Grid item xs={10}><TextField variant="outlined" fullWidth /></Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ProgressReportCard;
