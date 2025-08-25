import { useParams } from 'react-router-dom'; // Para obter o ID do livro da URL
import { useEffect, useState } from 'react';
import LivroService from '../../services/livroService'; // Importa o serviço para buscar o livro por ID
import BookForm from '../../components/bookform/BookForm';  // Importa o componente de formulário

const EditarLivro = () => {
  const { id } = useParams();  // Pega o ID do livro da URL
  const [livro, setLivro] = useState(null);  // Estado para armazenar os dados do livro

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const data = await LivroService.getLivroById(id);  // Busca o livro pelo ID
        setLivro(data.livro);  // Atualiza o estado com os dados do livro
      } catch (error) {
        console.error('Erro ao buscar livro:', error);  // Tratar erro de busca
      }
    };
    fetchLivro();  // Chama a função para buscar o livro ao carregar a página
  }, [id]);  // O efeito será disparado quando o ID mudar

  if (!livro) return <div>Carregando...</div>;  // Exibe "Carregando..." enquanto os dados não chegam

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Editar Livro</h1>
      <BookForm livroEdit={livro} />  {/* Passa o livro que será editado para o formulário */}
    </div>
  );
};

export default EditarLivro;
