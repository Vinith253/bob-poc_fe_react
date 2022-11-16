import { Stack, Typography } from '@mui/material';

export interface avatarInterface {
  isUrl: string;
  title: string;
  width: string;
  height: string;
}

const Avatar = ({
  isUrl,
  title,
  width = 'w-13',
  height = 'h-13',
}: avatarInterface) => {
  return (
    <Stack>
      {isUrl ? (
        <img
          src={require('@/src/assets/images/pexels-mentatdgt-1024311.jpg')}
          className={`${width} ${height} rounded-full object-cover`}
        />
      ) : (
        <Typography>{title ? title[0] : ''}</Typography>
      )}
    </Stack>
  );
};
export default Avatar;
