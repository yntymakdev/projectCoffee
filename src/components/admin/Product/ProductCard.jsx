import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProductContext } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ el }) => {
  const { deleteProduct } = useProductContext();
  const navigate = useNavigate();
  return (
    <Box className="container">
      <Box className="card-blocks">
        <Box className="card">
          <img className="card_img" src={el.image} alt="img" />
          <Box className="card_text">
            <h1>{el.name}</h1>
            <h2>{el.price}</h2>
          </Box>
          <div className="icons">
            <button
              style={{ color: "white" }}
              onClick={() => navigate(`/edit/${el.id}`)}
            >
              <BorderColorIcon />
            </button>
            <button className="a1" onClick={() => deleteProduct(el.id)}>
              <DeleteIcon />
            </button>

            <ShoppingCartIcon />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
