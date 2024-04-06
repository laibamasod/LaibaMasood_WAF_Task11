import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
function OrderConfirm() {
    const navigate = useNavigate();

  return (
    <div>
      <p>Order is confirmed</p>
      <button onClick={() => navigate(-1)}>Back to Homepage</button>
    </div>
  );
}

export default OrderConfirm;