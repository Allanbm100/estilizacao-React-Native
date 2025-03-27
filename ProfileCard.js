import { Avatar, Container, Name, ProfileHeader, ProfileInfo, StatItem, StatLabel, StatsContainer, StatValue, Title, Location, Bio, ActionButton, ActionButtonText } from "./styles"

export default function ProfileCard({ user }) {
    return (
        <Container>
            <ProfileHeader>
                <Avatar source={{ uri: user.avatar_url }} />
                <ProfileInfo>
                    <Name>{user.name}</Name>
                    <Title>{user.title}</Title>
                    <Location>{user.location}</Location>
                </ProfileInfo>
            </ProfileHeader>
            <Bio selectable>{user.bio}</Bio>
            <StatsContainer>
                <StatItem>
                    <StatValue>{user.stats.posts.item}</StatValue>
                    <StatLabel>{user.stats.posts.label}</StatLabel>
                </StatItem>
                <StatItem>
                <StatValue>{user.stats.followers.item}</StatValue>
                <StatLabel>{user.stats.followers.label}</StatLabel>
                </StatItem>
                <StatItem>
                <StatValue>{user.stats.following.item}</StatValue>
                <StatLabel>{user.stats.following.label}</StatLabel>
                </StatItem>
            </StatsContainer>
            <ActionButton activeOpacity={0.7}>
                <ActionButtonText>Editar Perfil</ActionButtonText>
            </ActionButton>
        </Container>
    )
}