import Linha from "@/components/layout/Linha";
import Menu from "@/components/template/Menu";
import MenuItem from "@/components/template/MenuItem";
import Pagina from "@/components/template/Pagina";
import { Icon24Hours, IconClock, IconSourceCode, IconTable } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem
            url="/hora.html"
            icone={<IconSourceCode />}
            className={`
            bg-gradient-to-r from-red-500 to-yellow-500
          `}
          >
            Hora (Estático)
          </MenuItem>
          <MenuItem
            url="/horaAtual.html"
            icone={<IconSourceCode />}
            className={`
          bg-gradient-to-r from-red-500 to-yellow-500
          `}
          >
            Hora com JS (Estático)
          </MenuItem>
          <MenuItem
            url="/api/hora"
            icone={<IconClock />}
            className={`
          bg-gradient-to-r from-red-500 to-yellow-500
          `}
          >
            Hora (Dinâmico)
          </MenuItem>
          <MenuItem
            url="/api/tabela?colunas=10&linhas=5"
            icone={<IconTable />}
            className={`
          bg-gradient-to-r from-red-500 to-yellow-500
          `}
          >
            Tabelas (Dinâmico)
          </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
  );
}
