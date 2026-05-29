import { Stack, TextField, Typography } from '@mui/material';

export const UploadDocsFormTitle: React.FC = () => {
  const titleSx = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#0F172A',
    textAlign: 'center',
  };
  const stackSx = {
    width: '100%',
    gap: '10px',
    alignItems: 'start',
  };
  return (
    <Stack sx={stackSx}>
      <Typography sx={titleSx}>1. 문서 제목 (선택)</Typography>
      <TextField
        sx={{
          width: '100%',
        }}
        placeholder="분석할 문서의 제목을 입력해주세요 (미입력 시 파일명으로 저장됩니다)"
      ></TextField>
    </Stack>
  );
};
