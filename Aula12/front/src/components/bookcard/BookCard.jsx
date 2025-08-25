import { Link } from 'react-router-dom';

const BookCard = ({ livro, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 m-4 rounded-lg shadow-md w-60">
      <h2 className="text-xl font-bold">{livro.titulo}</h2>
      <p className="text-gray-600">{livro.autor}</p>
      <p className="text-gray-500">{livro.genero}</p>
      <p className="text-green-600 font-semibold">R$ {livro.preco}</p>
      <Link to={`/livro/${livro.id}`} className="text-blue-500 hover:underline">Ver Detalhes</Link>
      <button 
        onClick={() => onDelete(livro.id)} 
        className="mt-2 text-red-500 hover:text-red-700"
      >
        Deletar
      </button>
      <button 
        onClick={() => onEdit(livro.id)} 
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        Editar
      </button>
    </div>
  );
};

export default BookCard;
