import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowIcon from '../components/icons/ArrowIcon';
import CardIcon from '../components/icons/CardIcon';
import HomeIcon from '../components/icons/HomeIcon';
import LearnIcon from '../components/icons/LearnIcon';
import MoveFundsIcon from '../components/icons/MoveFundsIcon';
import NotificationIcon from '../components/icons/NotificationIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import SeeAllIcon from '../components/icons/SeeAllIcon';
import TransactionsIcon from '../components/icons/TransactionsIcon';
import { learningResources, promotions } from '../data/mockData';
import { theme } from '../styles/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome, Peter</Text>
            <Text style={styles.subtitle}>30 October 2025</Text>
          </View>
          <View style={styles.notificationWrapper}>
            <TouchableOpacity style={styles.notificationBtn}>
              <NotificationIcon size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Current Account Card - BLACK TEXT */}
        <TouchableOpacity style={[styles.card, { backgroundColor: '#FFB800' }]} activeOpacity={0.9}>
          <View style={styles.cardTop}>
            <View style={styles.cardLeft}>
              <Text style={[styles.accountName, { color: '#000' }]}>Current Account</Text>
              <Text style={[styles.accountSubtitle, { color: 'rgba(0,0,0,0.7)' }]}>Funds available to spend</Text>
            </View>
            <Text style={[styles.balance, { color: '#000' }]}>£950.00</Text>
          </View>
          
          <View style={styles.cardBottom}>
            <TouchableOpacity style={styles.actionBtn}>
              <CardIcon size={16} />
              <Text style={[styles.btnText, { color: '#FFF' }]}>Card details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowBtn}>
              <ArrowIcon size={32} isDark={false} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Savings Account Card - BLACK TEXT */}
        <TouchableOpacity style={[styles.card, { backgroundColor: '#8B7BFF' }]} activeOpacity={0.9}>
          <View style={styles.cardTop}>
            <View style={styles.cardLeft}>
              <Text style={[styles.accountName, { color: '#000' }]}>Savings</Text>
              <Text style={[styles.accountSubtitle, { color: 'rgba(0,0,0,0.7)' }]}>High Interest Savings (Tax Free)</Text>
            </View>
            <Text style={[styles.balance, { color: '#000' }]}>£16,400.00</Text>
          </View>
          
          <View style={styles.cardBottom}>
            <TouchableOpacity style={styles.actionBtn}>
              <MoveFundsIcon size={16} />
              <Text style={[styles.btnText, { color: '#FFF' }]}>Move Funds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowBtn}>
              <ArrowIcon size={32} isDark={false} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Pension Card - WHITE TEXT */}
        <TouchableOpacity style={[styles.card, { backgroundColor: '#2A2A2A' }]} activeOpacity={0.9}>
          <View style={styles.cardTop}>
            <View style={styles.cardLeft}>
              <Text style={[styles.accountName, { color: '#FFF' }]}>Pension</Text>
              <Text style={[styles.accountSubtitle, { color: 'rgba(255,255,255,0.7)' }]}>Your Pension and Investments</Text>
            </View>
            <Text style={[styles.balance, { color: '#FFF' }]}>£48,750.00</Text>
          </View>
          
          <View style={styles.cardBottom}>
            <TouchableOpacity style={styles.actionBtn}>
              <MoveFundsIcon size={16} />
              <Text style={[styles.btnText, { color: '#FFF' }]}>Move Funds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowBtn}>
              <ArrowIcon size={32} isDark={true} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Promotions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Promotions</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>See all</Text>
              <SeeAllIcon size={20} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {promotions.map((promo) => (
              <TouchableOpacity key={promo.id} style={styles.promoCard}>
                <ImageBackground source={{ uri: promo.image }} style={styles.promoImage} imageStyle={{ borderRadius: 12 }}>
                  <View style={styles.promoGradient}>
                    <View style={styles.promoBadge}>
                      <Text style={styles.badgeText}>{promo.badge}</Text>
                    </View>
                    <Text style={styles.promoTitle}>{promo.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Learning Resources */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Learning resources</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>See all</Text>
              <SeeAllIcon size={20} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {learningResources.map((resource) => (
              <TouchableOpacity key={resource.id} style={styles.learningCard}>
                <ImageBackground source={{ uri: resource.image }} style={styles.learningImage} imageStyle={{ borderRadius: 12 }} />
                <Text style={styles.learningTitle} numberOfLines={3}>{resource.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon active={true} size={24} />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <TransactionsIcon active={false} size={24} />
          <Text style={styles.navLabel}>Transactions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <LearnIcon active={false} size={24} />
          <Text style={styles.navLabel}>Learn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <ProfileIcon active={false} size={24} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.gray,
    marginTop: 4,
  },
  notificationWrapper: {
    backgroundColor: '#211E1E',
    padding: 14,
    borderRadius: 50,
  },
  notificationBtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  cardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  accountName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  accountSubtitle: {
    fontSize: 14,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  arrowBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.white,
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingRight: 16,
  },
  promoCard: {
    width: 280,
    height: 180,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  promoImage: {
    width: '100%',
    height: '100%',
  },
  promoGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  promoBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gold,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#000',
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.white,
    lineHeight: 22,
  },
  learningCard: {
    width: 200,
    marginRight: 16,
  },
  learningImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  learningTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.white,
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: theme.colors.cardDark,
    paddingVertical: 8,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    gap: 4,
  },
  navLabel: {
    fontSize: 11,
    color: theme.colors.gray,
  },
  navLabelActive: {
    fontSize: 11,
    color: theme.colors.primary,
    fontWeight: '600',
  },
});