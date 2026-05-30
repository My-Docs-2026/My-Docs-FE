import { Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export const UploadDocsFormFile: React.FC = () => {
  const { register, setValue, watch } = useFormContext();
  const [tab, setTab] = useState('1');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const file = watch('file');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setValue('file', event.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setValue('file', e.dataTransfer.files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

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
      <Typography sx={titleSx}>2. 문서 업로드</Typography>
      <TabContext value={tab}>
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            width: '100%',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Tab label="파일 업로드" value="1" sx={{ textTransform: 'none' }} />
          <Tab label="텍스트 입력" value="2" sx={{ textTransform: 'none' }} />
        </Tabs>
        <TabPanel value="1" sx={{ width: '100%', p: '10px 0' }}>
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
          <Stack
            onClick={handleUploadClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            sx={{
              width: '100%',
              height: '200px',
              border: '2px dashed #CBD5E1',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: '#F8FAFC',
              },
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#64748B',
              }}
            >
              {file
                ? `선택된 파일: ${file.name}`
                : '파일을 여기에 드래그 앤 드롭하거나 클릭하여 업로드하세요'}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="2" sx={{ width: '100%', p: '10px 0' }}>
          <TextField
            {...register('text')}
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                height: '200px',
                alignItems: 'start',
              },
              borderRadius: '10px',
            }}
            placeholder="분석할 텍스트를 입력해주세요"
            multiline
          />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};
