import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LivroService from '../../services/livroService'; // Serviço para buscar o livro por ID
import BookCard from '../../components/bookcard/BookCard'; // Componente reutilizável para exibir os livros

const Livro = () => {
  const { id } = useParams();  // Obtém o ID do livro da URL
  const [livro, setLivro] = useState(null);  // Estado para armazenar os dados do livro

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const data = await LivroService.getLivroById(id);  // Busca o livro com o ID
        setLivro(data.livro);  // Atualiza o estado com o livro encontrado
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar livro:', error);
      }
    };
    fetchLivro();  // Chama a função para buscar o livro ao carregar a página
  }, [id]);  // O efeito será disparado sempre que o ID mudar

  if (!livro) return <div>Carregando...</div>;  // Exibe "Carregando..." enquanto os dados não chegam

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Detalhes do Livro</h1>
      <BookCard livro={livro} />  {/* Reutiliza o componente BookCard para exibir os detalhes */}
    </div>
  );
};

export default Livro;
