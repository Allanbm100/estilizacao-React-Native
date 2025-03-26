import { StyleSheet } from 'react-native';
import { Avatar, Container, ProfileHeader } from './styles';

export default function App() {
  return (
    <Container>
      <ProfileHeader>
        <Avatar 
          source={{ uri: "https://www.github.com/Allanbm100" }}
        />
      </ProfileHeader>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
