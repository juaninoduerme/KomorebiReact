import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//imports propiois
import { useCart } from '../../contexts/cartcontext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "primary",
    color: "secondary",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Cart() {

  const { cart, removeItemCart, countItemsCart, clearCart, totalPriceCart } = useCart();

  const precioTotal = totalPriceCart();

  const onRemove = (idItem) => {
      //removeItemCart(idItem);
  };
  
  return (    
    <div>
      {countItemsCart() > 0 ?
        (<TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Producto</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Sub-Total</StyledTableCell>
                <StyledTableCell align="right">Eliminar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    <Avatar
                      alt={item.alt}
                      src={item.imagenMini}
                      variant="square"
                    />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.nombre}
                  </StyledTableCell>
                  <StyledTableCell align="right">${item.precio}</StyledTableCell>
                  <StyledTableCell align="right">{item.cantidad}</StyledTableCell>
                  <StyledTableCell align="right">{item.cantidad * item.precio}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button size="small" onClick={onRemove(item.id)}>
                      <DeleteIcon/>
                    </Button>                  
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableCell align="right">
                <Link to="/" underline="none">Volver</Link>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button size="small">
                  Vaciar Carrito
                </Button>                  
              </StyledTableCell>
              <StyledTableCell align="right">
                <Link to="/" underline="none">Terminar mi compra</Link>
              </StyledTableCell>
              <StyledTableCell align="right">${precioTotal}</StyledTableCell>
            </TableBody>
          </Table>
        </TableContainer>)  
      :
        (<Box sx={{ width: "50%", margin: "5% auto"}}>
          <Typography variant="h3" component="div">
            <Link to="/" underline="none">
              Tu carrito está vacío (╯°□°)╯︵ ┻━┻ 
              Volvé para llenarlo de productos ♥
            </Link>
          </Typography>
        </Box>) 
      }
    </div>  
    );
}
