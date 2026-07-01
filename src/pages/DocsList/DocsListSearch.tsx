import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface DocsListSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const DocsListSearch: React.FC<DocsListSearchProps> = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="문서 제목을 검색하세요"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#94A3B8' }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          '& fieldset': { borderColor: '#E2E8F0' },
          '&:hover fieldset': { borderColor: '#2563EB' },
          '&.Mui-focused fieldset': { borderColor: '#2563EB' },
        },
      }}
    />
  );
};
