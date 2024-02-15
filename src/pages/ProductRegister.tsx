import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { uploadImageToStorage } from '../firebase/strorage';
import { product } from "../types/products";

export default function Top() {
    const [file, setFile] = React.useState<File | null>(null);
    const [title, setTitle] = React.useState<string>();
    const [price, setPrice] = React.useState<number>();
    const [kind, setKind] = React.useState<string>();
    const [description, setDescription] = React.useState<string>();


    const RegisterClicked = () => {
        console.log(file, title, price, kind, description);
        let d = new Date()
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let sec = d.getSeconds();
        let msec = d.getMilliseconds();
        let id: number = Number(String(year) + String(month) + String(day) + String(sec) + String(msec))

        if (file && title && price && kind && description) {

            const product: product = {
                id: id,
                title: title,
                kind: kind,
                price: price,
                description: description,
                questionnaire: {
                    small: [],
                    taste: [],
                    feel: [],
                    health: [],
                    comment: []
                
                },
                data: {
                    small: 0,
                    taste: 0,
                    feel: 0,
                    when: 0
                }
            };

            try {
                uploadImageToStorage(file, product);
                console.log("商品がアップロードされました。");
                alert("商品がアップロードされました。");
            } catch (error) {
                console.error("アップロードエラー: ", error);
                alert("アップロードエラー: " + error);
            }
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <>
            <AppBar position="static" sx={{ width: '100%', height: '10%' }}>
                <Container maxWidth="xl">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        商品データベース -Ise Database-
                    </Typography>
                </Container>
            </AppBar>
            <Box sx={{ width: '100%', height: '80%' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div>

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            説明 -Description-
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" sx={{ flexGrow: 1 }}>
                            商品データベースの商品の登録ページです。
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={handleFileChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="title"
                            label="名前 -Title-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="price"
                            label="値段 -Price-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setPrice(Number(e.target.value))
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="kind"
                            label="種類 -Kind-"
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setKind(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="description"
                            label="説明 -Description-"
                            multiline
                            rows={3}
                            sx={{ width: 150 }}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={RegisterClicked} sx={{ width: 150 }} variant="contained">登録 -Register-</Button>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}