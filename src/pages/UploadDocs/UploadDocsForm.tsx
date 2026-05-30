import { Button, Stack } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UploadDocsFormTitle } from './UploadDocsFormTitle';
import { UploadDocsFormFile } from './UploadDocsFormFile';
import { UploadDocsFormModel } from './UploadDocsFormModel';

export interface UploadDocsFormValues {
  title: string;
  file: File | null;
  text: string;
  model: string;
}

export const UploadDocsForm: React.FC = () => {
  const navigate = useNavigate();
  const methods = useForm<UploadDocsFormValues>({
    defaultValues: {
      title: '',
      file: null,
      text: '',
      model: 'basic',
    },
  });

  const onSubmit = (data: UploadDocsFormValues) => {
    console.log('Form Data:', data);
    // logic for analysis...
    // navigate('/');
  };

  return (
    <FormProvider {...methods}>
      <Stack
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          gap: '40px',
          width: '1000px',
          maxWidth: '1920px',
          height: '720px',
          justifyContent: 'space-between',
          alignItems: 'start',
          backgroundColor: '#FFFFFF',
          padding: '22px 60px',
          boxSizing: 'border-box',
          borderRadius: '20px',
          border: '2px solid #CBD5E1',
        }}
      >
        <Stack
          sx={{
            gap: '40px',
            width: '100%',
            alignItems: 'start',
            boxSizing: 'border-box',
          }}
        >
          <UploadDocsFormTitle />
          <UploadDocsFormFile />
          <UploadDocsFormModel />
        </Stack>

        <Button
          type="submit"
          sx={{
            width: '100%',
            height: '64px',
            maxHeight: '64px',
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 600,
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#1D4ED8',
            },
          }}
        >
          분석 시작하기
        </Button>
      </Stack>
    </FormProvider>
  );
};
