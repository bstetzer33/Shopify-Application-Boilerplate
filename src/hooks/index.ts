import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const { user, token, loading, error } = useSelector((state: RootState) => state.auth);
  return { user, token, loading, error };
};

export const useCart = () => {
  const { cart, loading, error } = useSelector((state: RootState) => state.cart);
  return { cart, loading, error };
};

export const useProducts = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.product);
  return { products, loading, error };
};