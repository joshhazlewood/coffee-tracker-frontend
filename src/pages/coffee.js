import { Box, Container, Typography } from "@material-ui/core";
import BeanTable from "../components/BeanTable.js";
import BeanArchiveTable from "../components/BeanArchiveTable.js";

export function Coffee({ beans }) {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Current
      </Typography>
      <Box mb={3}>
        <BeanTable beans={beans} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Historical
      </Typography>
      <Box mb={3}>
        <BeanArchiveTable archivedBeans={beans} />
      </Box>
    </Container>
  );
}
