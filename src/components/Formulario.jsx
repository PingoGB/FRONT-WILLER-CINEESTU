import { useState } from "react";

export default function Formulario({onUsuarioCadastrado}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [bio, setBio] = useState('');
    const [fotoUrl, setFotoUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const lidarComCadastro = async (e)=>{
        e.preventDefault();
        setLoading(true);

        try{
            const response = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {"Content-Type": "aplication.json"},
                body: JSON.stringify({email, senha, bio, fotoUrl}) 
            })
            if(response.ok){
                setEmail('')
                setSenha('')
                setBio('')
                setFotoUrl('')
                onUsuarioCadastrado()
            } else{
                const erro = await response.json();
                alert(`Erro: ${erro.erro}`)
            }
        }
        catch{
            alert("Erro ao conectar com a API")
        } finally{
            setLoading(false)
        }
    }
    return(
        <div className="card">
            <h2 className="card-title-post">Cadastrar usuário + perfil</h2>
            <form onSubmit={lidarComCadastro}>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                </div>
                
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" required value={senha} onChange={e => setSenha(e.target.value)} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>Bio</label>
                    <textarea value={bio} onChange={e => setBio(e.target.value)} className="form-control"></textarea>
                </div>

                <div className="form-group">
                    <label>Foto</label>
                    <input type="text" required value={fotoUrl} onChange={e => setFotoUrl(e.target.value)} className="form-control"></input>
                </div>

                <button type="submit" disabled={loading} className="btn-submit">
                    {loading ? "Processamento...": "Salvar"}
                </button>

            </form>
        </div>
    )
};