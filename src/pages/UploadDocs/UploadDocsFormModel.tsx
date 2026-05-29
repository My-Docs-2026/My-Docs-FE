import { FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';

export const UploadDocsFormModel: React.FC = () => {
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
      <Typography sx={titleSx}>3. 분석 모델 선택</Typography>
      <Stack direction="row" sx={{ gap: '24px' }}>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="gpt-3.5-turbo"
          name="radio-buttons-group"
        >
          <FormControlLabel value="basic" control={<Radio />} label="기본 모델 (속도 최적화)" />
          <FormControlLabel value="mid" control={<Radio />} label="정밀 모델 (정확도 우선)" />
          <FormControlLabel
            value="advanced"
            control={<Radio />}
            label="법률 특화 모델 (전문가용)"
          />
        </RadioGroup>
      </Stack>
    </Stack>
  );
};
