export default function Listagem({ usuarios }) {
    return (
        <div className="card">
            <h2 className="card-title-get">🔍 Usuários Cadastrados ({usuarios.length})</h2>
            {usuarios.length === 0 ? (
                <p style={{ italic: "true", color: "var(--text-muted)" }}>Nenhum usuário encontrado no banco.</p>
            ) : (
                <div className="lista-scroll">
                    {usuarios.map(user => (
                        <div key={user.id} className="usuario-item">
                            <div className="usuario-header">
                                <span className="usuario-email">{user.email}</span>
                                <span className="usuario-id">ID: {user.id}</span>
                            </div>
                            <p className="usuario-senha">Senha em texto: <span className="font-mono">{user.senha}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}