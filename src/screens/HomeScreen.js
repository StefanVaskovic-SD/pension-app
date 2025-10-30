import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { accounts } from '../data/mockData';
import { theme } from '../styles/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome, Peter</Text>
            <Text style={styles.subtitle}>ID Owner 4652</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Account Cards */}
        {accounts.map((account) => (
          <View 
            key={account.id}
            style={[styles.card, { backgroundColor: account.color }]}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.accountName}>{account.name}</Text>
              <Text style={styles.accountNumber}>{account.accountNumber}</Text>
            </View>
            
            <View style={styles.cardFooter}>
              <Text style={styles.balance}>£{account.balance.toFixed(2)}</Text>
              
              {account.type !== 'pension' && (
                <TouchableOpacity style={styles.detailsBtn}>
                  <Text style={styles.btnText}>{account.icon} Details</Text>
                </TouchableOpacity>
              )}
              
              {account.type === 'pension' && (
                <TouchableOpacity style={styles.moveBtn}>
                  <Text style={styles.btnText}>↗️ Move Funds</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  greeting: {
    fontSize: theme.fontSize.xlarge,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.gray,
    marginTop: 4,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.cardDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
  },
  card: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  cardHeader: {
    marginBottom: 30,
  },
  accountName: {
    fontSize: theme.fontSize.large,
    fontWeight: '600',
    color: theme.colors.white,
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: theme.fontSize.regular,
    color: theme.colors.lightGray,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balance: {
    fontSize: theme.fontSize.xxlarge,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  detailsBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.xl,
  },
  moveBtn: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.borderRadius.xl,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.regular,
    fontWeight: '600',
  },
});