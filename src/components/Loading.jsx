import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div>
      <CircularProgress />
      <h1>Loading...</h1>
    </div>
  );
}