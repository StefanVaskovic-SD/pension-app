import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MoveFundsIcon from '../components/icons/MoveFundsIcon';
import { quickActions, transactions } from '../data/mockData';
import { theme } from '../styles/theme';

export default function AccountDetailScreen({ route, navigation }) {
  const { account } = route.params;
  
  // Filter transactions for this account
  const accountTransactions = transactions.filter(t => t.account === account.type);
  
  // Determine if account should show quick actions (only Current Account)
  const showQuickActions = account.type === 'current';
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{account.name}</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Account Card */}
        <View style={[styles.accountCard, { backgroundColor: account.color }]}>
          <View style={styles.cardContent}>
            <Text style={[styles.accountName, { color: account.type === 'pension' ? '#FFF' : '#000' }]}>
              {account.name}
            </Text>
            <Text style={[styles.accountSubtitle, { color: account.type === 'pension' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }]}>
              {account.accountNumber}
            </Text>
            
            {/* Balance Row */}
            <View style={styles.balanceRow}>
              <View>
                <Text style={[styles.balanceLabel, { color: account.type === 'pension' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }]}>
                  {account.icon} Balance
                </Text>
                <Text style={[styles.balanceAmount, { color: account.type === 'pension' ? '#FFF' : '#000' }]}>
                  £{account.balance.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Move Funds Button (for Savings and Pension) */}
        {(account.type === 'savings' || account.type === 'pension') && (
          <TouchableOpacity style={styles.moveFundsBtn}>
            <MoveFundsIcon size={20} />
            <Text style={styles.moveFundsText}>Move funds</Text>
          </TouchableOpacity>
        )}

        {/* Quick Actions (only for Current Account) */}
        {showQuickActions && (
          <View style={styles.quickActions}>
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionEmoji}>{action.icon}</Text>
                </View>
                <Text style={styles.actionLabel}>{action.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Transactions */}
        <View style={styles.transactionsSection}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          
          {accountTransactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                <Text style={styles.transactionEmoji}>
                  {transaction.amount > 0 ? '⬆️' : '⬇️'}
                </Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
              <Text style={[
                styles.transactionAmount,
                { color: transaction.amount > 0 ? '#4CAF50' : '#FFF' }
              ]}>
                {transaction.amount > 0 ? '+' : ''} £{Math.abs(transaction.amount).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.cardDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: theme.colors.white,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.white,
  },
  accountCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardContent: {
    gap: 12,
  },
  accountName: {
    fontSize: 18,
    fontWeight: '600',
  },
  accountSubtitle: {
    fontSize: 14,
  },
  balanceRow: {
    marginTop: 12,
  },
  balanceLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  moveFundsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  moveFundsText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.white,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    gap: 8,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.cardDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionEmoji: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: 12,
    color: theme.colors.white,
  },
  transactionsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.white,
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.cardDark,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionEmoji: {
    fontSize: 18,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.white,
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: theme.colors.gray,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
});