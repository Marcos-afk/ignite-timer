import * as Styled from './styles';

export const History = () => {
  return (
    <Styled.HistoryContainer>
      <h1>Meu histórico</h1>

      <Styled.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>40 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Styled.Status statusColor="green">Concluído</Styled.Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>40 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Styled.Status statusColor="green">Concluído</Styled.Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>40 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Styled.Status statusColor="yellow">Em andamento</Styled.Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>40 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Styled.Status statusColor="red">Interrompido</Styled.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </Styled.HistoryList>
    </Styled.HistoryContainer>
  );
};
