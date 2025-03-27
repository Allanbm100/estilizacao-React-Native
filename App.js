import ProfileCard from "./ProfileCard";

export default function App() {
    return (
      <ProfileCard
        user={{
          avatar:
          "https://img.freepik.com/vetortes-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg",
          name: "Allan",
          title: "Desenvolvedor de Sistemas",
          location: "São Paulo, Brasil",
          Bio: "Aprendendo a área no momento, tendendo a front-end",
          stats: {
            posts: {
              item: 150,
              label: "Publicações",
            },
            followers: {
              item: 300,
              label: "Seguidores",
            },
            following: {
              item: 400,
              label: "Seguindo",
            },
          },
        }}
      
      />
    )
}