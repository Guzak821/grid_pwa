import React from 'react';
import { Container, Grid2 as Grid, Paper, Typography, Box } from '@mui/material';

const BoxItem = ({ cols, attribute }) => (
  <Paper
    elevation={0}
    sx={{
      bgcolor: '#000000',
      color: '#ffffff',
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
      px: 2,
      textAlign: 'center',
    }}
  >
    <Typography variant="h6" fontWeight="bold">
      {cols}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
      {attribute}
    </Typography>
  </Paper>
);

export default function App() {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* 1 sección con grid 12-12 */}
          <Grid size={12}>
            <BoxItem cols="12" attribute="Perseverante y enfocado en resolver problemas" />
          </Grid>

          {/* 2 secciones con grid 12-6 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <BoxItem cols="6" attribute="Aprendizaje rápido y autodidacta" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <BoxItem cols="6" attribute="Responsable y comprometido con mis metas" />
          </Grid>

          {/* 3 secciones con grid 12-4 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <BoxItem cols="4" attribute="Trabajo bien en equipo" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BoxItem cols="4" attribute="Pensamiento lógico y analítico" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BoxItem cols="4" attribute="Adaptable a nuevos retos" />
          </Grid>

          {/* 4 secciones con grid 12-3 (3 adicionales a la base / fila completa de 4 columnas de 3) */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <BoxItem cols="3" attribute="Creativo" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <BoxItem cols="3" attribute="Proactivo" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <BoxItem cols="3" attribute="Disciplinado" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <BoxItem cols="3" attribute="Empático" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
