import React, { useState } from 'react';
import '../assets/styles/Goods.css';  // Ajuste o caminho conforme a estrutura do seu projeto

const Goods: React.FC = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [tradeable, setTradeable] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(false);

  const handleSubmit = (event: React.FormEvent, type: string) => {
    event.preventDefault();
    console.log({ name, cost, category, tradeable, fixedPrice });
  };

  return (
    <div className="goods-container">
      <h1>Goods</h1>
      <form onSubmit={(e) => handleSubmit(e, 'name')}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Placeholder" />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={(e) => handleSubmit(e, 'cost')}>
        <label>Cost</label>
        <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Placeholder" />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={(e) => handleSubmit(e, 'category')}>
        <label>Category</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Placeholder" />
        <button type="submit">Submit</button>
      </form>
      <label>
        Tradeable
        <input type="checkbox" checked={tradeable} onChange={() => setTradeable(!tradeable)} />
      </label>
      <label>
        Fixed Price
        <input type="checkbox" checked={fixedPrice} onChange={() => setFixedPrice(!fixedPrice)} />
      </label>
      <div className="file-upload">
        <label>Select Folder</label>
        <input type="file" />
      </div>
      <div className="code-preview">
        <pre>
          {`
cimento = {
  texture = "gfx/interface/icons/goods_icons/cimento.dds"
  cost = ${cost}
  category = ${category}
  tradeable = ${tradeable ? 'yes' : 'no'}
  fixed_price = ${fixedPrice ? 'yes' : 'no'}
}
`}
        </pre>
      </div>
      <button className="clear-btn">Clear</button>
      <button className="save-btn">Save</button>
    </div>
  );
};

export default Goods;
