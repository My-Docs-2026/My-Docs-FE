import { Box, Button, Stack } from '@mui/material';
import { useLogin } from '../../stores/Auth/useLogin';
import { LoginDialog } from '../Components/Auth/LoginDialog';

export const Header: React.FC = () => {
  // Zustand의 개별 셀렉터를 사용하면 참조가 안정화되고 불필요한 리렌더링을 방지합니다.
  const isLoginDialogOpen = useLogin((state) => state.isLoginDialogOpen);
  const setIsLoginDialogOpen = useLogin((state) => state.setIsLoginDialogOpen);

  // 디버깅을 위해 스토어에서 함수를 제대로 가져왔는지 확인
  console.log('setIsLoginDialogOpen type:', typeof setIsLoginDialogOpen);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          maxWidth: '1920px',
          height: '80px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 120px',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ fontWeight: 'bold', fontSize: '24px', color: '#000' }}>Logo</Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#64748B',
            color: '#ffffff',
          }}
          onClick={() => {
            console.log('시작하기 버튼 클릭됨'); // 작동 확인용 로그
            setIsLoginDialogOpen(true);
          }}
        >
          시작하기
        </Button>
      </Stack>

      {/* 
        버튼이 "작동"하려면 아래와 같이 다이얼로그 컴포넌트가 
        상태(isLoginDialogOpen)를 구독하고 렌더링되어야 합니다.
      */}
      <LoginDialog />
    </Box>
  );
};
