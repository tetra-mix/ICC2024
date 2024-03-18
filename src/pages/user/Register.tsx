import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/UserContext';
import { useNavigate } from 'react-router-dom';
import { register } from '../../firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Register: React.FC = () => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        register(name, email, password).then((user) => {
            setUser(user, () => {
                alert('登録成功');
                navigate('/');
            });
        }).catch((error) => {
            alert(error);
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    新規登録
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="ニックネーム/名前"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleSubmit()}
                    >
                        新規登録登録
                    </Button>
                    <Button
                        type="button"
                        onClick={() => navigate('/')}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        もとのページに戻る
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;