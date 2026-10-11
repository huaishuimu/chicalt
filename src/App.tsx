/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DeviceFrame } from './components/common/DeviceFrame';
import { BottomTabBar, TabType } from './components/common/BottomTabBar';

// 18 Screen Components
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { AuthSocialScreen } from './components/screens/AuthSocialScreen';
import { AuthVerifyScreen } from './components/screens/AuthVerifyScreen';
import { AuthRegisterScreen } from './components/screens/AuthRegisterScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { SearchScreen } from './components/screens/SearchScreen';
import { SearchResultsScreen } from './components/screens/SearchResultsScreen';
import { ProductDetailScreen } from './components/screens/ProductDetailScreen';
import { ReviewsModal } from './components/screens/ReviewsModal';
import { AIFittingScreen } from './components/screens/AIFittingScreen';
import { BodyIDScreen } from './components/screens/BodyIDScreen';
import { AIChatScreen } from './components/screens/AIChatScreen';
import { DiscoveryScreen } from './components/screens/DiscoveryScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { CartScreen } from './components/screens/CartScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

// Modals
import { VirtualTryOnModal } from './components/modals/VirtualTryOnModal';

// Mock Data
import { ProductItem } from './data/mockData';

// Master List of 18 Screens matching user's uploaded images
export const SCREENS_CATALOG = [
  { id: 'splash', nameZh: '开屏页', nameEn: 'Splash Welcome' },
  { id: 'onboarding', nameZh: '引导页', nameEn: 'Editorial Philosophy' },
  { id: 'auth_social', nameZh: '登录注册1', nameEn: 'Social Login' },
  { id: 'auth_verify', nameZh: '登录注册2', nameEn: 'Verification Code Login' },
  { id: 'auth_register', nameZh: '登录注册3', nameEn: 'Set Password & Register' },
  { id: 'home', nameZh: '首页', nameEn: 'Home Shopping Feed' },
  { id: 'search', nameZh: '搜索页', nameEn: 'Search & Categories Rail' },
  { id: 'search_results', nameZh: '搜索结果页', nameEn: 'Category Grid (Underwear)' },
  { id: 'product_detail', nameZh: '商品详情页1', nameEn: 'Nixon Watch Detail' },
  { id: 'reviews', nameZh: '评论区', nameEn: 'Ratings & Reviews' },
  { id: 'ai_fitting', nameZh: 'ai试衣间', nameEn: 'AI Fitting & 3D Simulation' },
  { id: 'body_id', nameZh: '身体数据设置页', nameEn: 'Body ID Biometrics' },
  { id: 'ai_chat', nameZh: 'ai对话界面', nameEn: 'Chichi AI Stylist Chat' },
  { id: 'discovery', nameZh: '逛逛页', nameEn: 'Community Discovery Feed' },
  { id: 'messages', nameZh: '消息页', nameEn: 'Brand Updates & Inbox' },
  { id: 'cart', nameZh: '购物车页', nameEn: 'Cart Order Summary' },
  { id: 'checkout', nameZh: '付款页面', nameEn: 'Order Finalize & Payment' },
  { id: 'profile', nameZh: '个人主页', nameEn: 'Sloane Bennett Profile' },
];

export default function App() {
  // Current screen state
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [cartCount, setCartCount] = useState<number>(5);

  // Modal states
  const [isVirtualTryOnOpen, setIsVirtualTryOnOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Bottom tab switcher
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'home') setCurrentScreen('home');
    else if (tab === 'discovery') setCurrentScreen('discovery');
    else if (tab === 'chichi') setCurrentScreen('ai_chat');
    else if (tab === 'cart') setCurrentScreen('cart');
    else if (tab === 'profile') setCurrentScreen('profile');
  };

  const handleScreenDirectSelect = (screenId: string) => {
    setCurrentScreen(screenId);
    if (screenId === 'home') setActiveTab('home');
    else if (screenId === 'discovery') setActiveTab('discovery');
    else if (screenId === 'ai_chat') setActiveTab('chichi');
    else if (screenId === 'cart') setActiveTab('cart');
    else if (screenId === 'profile' || screenId === 'ai_fitting' || screenId === 'body_id') {
      setActiveTab('profile');
    }
  };

  const handleAddToCart = (title?: string) => {
    setCartCount((c) => c + 1);
    showToast(`Added ${title || 'item'} to bag!`);
  };

  // Determine if BottomTabBar should be rendered
  const isTabBarVisible = [
    'home',
    'discovery',
    'ai_fitting',
    'messages',
    'cart',
    'profile',
    'search_results',
  ].includes(currentScreen);

  return (
    <DeviceFrame
      screensList={SCREENS_CATALOG}
      currentScreenId={currentScreen}
      onSelectScreen={handleScreenDirectSelect}
    >
      {/* Toast notification */}
      {toastMessage && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-neutral-900/90 text-white text-xs font-semibold rounded-full shadow-xl border border-neutral-700 animate-in fade-in slide-in-from-top-2">
          {toastMessage}
        </div>
      )}

      {/* Screen Routing */}
      {currentScreen === 'splash' && (
        <SplashScreen
          onStart={() => setCurrentScreen('onboarding')}
          onExplorePhilosophy={() => setCurrentScreen('onboarding')}
        />
      )}

      {currentScreen === 'onboarding' && (
        <OnboardingScreen
          onContinue={() => setCurrentScreen('auth_social')}
          onSkip={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'auth_social' && (
        <AuthSocialScreen
          onLoginWithAccount={() => setCurrentScreen('auth_verify')}
          onSocialLogin={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'auth_verify' && (
        <AuthVerifyScreen
          onBack={() => setCurrentScreen('auth_social')}
          onLoginSuccess={() => setCurrentScreen('home')}
          onGoToRegister={() => setCurrentScreen('auth_register')}
        />
      )}

      {currentScreen === 'auth_register' && (
        <AuthRegisterScreen
          onBack={() => setCurrentScreen('auth_verify')}
          onRegisterSuccess={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <HomeScreen
          onOpenSearch={() => setCurrentScreen('search')}
          onOpenProduct={(_prod: ProductItem | undefined) => setCurrentScreen('product_detail')}
          onOpenCategory={(_cat: string) => setCurrentScreen('search_results')}
        />
      )}

      {currentScreen === 'search' && (
        <SearchScreen
          onBack={() => setCurrentScreen('home')}
          onSearchSubmit={(_query: string) => setCurrentScreen('search_results')}
        />
      )}

      {currentScreen === 'search_results' && (
        <SearchResultsScreen
          onBack={() => setCurrentScreen('search')}
          onSelectProduct={(_prod: ProductItem) => setCurrentScreen('product_detail')}
        />
      )}

      {currentScreen === 'product_detail' && (
        <ProductDetailScreen
          onBack={() => setCurrentScreen('home')}
          onOpenReviews={() => setCurrentScreen('reviews')}
          onOpenFitting={() => setCurrentScreen('ai_fitting')}
          onAddToCart={() => handleAddToCart("Nixon Women's Watch")}
          onBuyNow={() => setCurrentScreen('checkout')}
        />
      )}

      {currentScreen === 'reviews' && (
        <ReviewsModal
          onBack={() => setCurrentScreen('product_detail')}
          onClose={() => setCurrentScreen('product_detail')}
          onAddToCart={() => handleAddToCart("Nixon Women's Watch")}
          onBuyNow={() => setCurrentScreen('checkout')}
          onSelectTab={(tab) => {
            if (tab === 'AI Fitting') setCurrentScreen('ai_fitting');
            else if (tab === 'Parameter') setCurrentScreen('product_detail');
          }}
        />
      )}

      {currentScreen === 'ai_fitting' && (
        <AIFittingScreen
          onBack={() => setCurrentScreen('home')}
          onOpenBodyID={() => setCurrentScreen('body_id')}
          onAddAllToBag={() => {
            handleAddToCart('Complete the Vibe set');
            setCurrentScreen('cart');
          }}
        />
      )}

      {currentScreen === 'body_id' && (
        <BodyIDScreen
          onBack={() => setCurrentScreen('ai_fitting')}
          onSave={() => setCurrentScreen('ai_fitting')}
        />
      )}

      {currentScreen === 'ai_chat' && (
        <AIChatScreen
          onBack={() => setCurrentScreen('home')}
          onOpenVirtualTryOn={() => setIsVirtualTryOnOpen(true)}
          onAddToCart={(title) => handleAddToCart(title)}
        />
      )}

      {currentScreen === 'discovery' && (
        <DiscoveryScreen onBack={() => setCurrentScreen('home')} />
      )}

      {currentScreen === 'messages' && (
        <MessagesScreen onOpenThread={() => setCurrentScreen('ai_chat')} />
      )}

      {currentScreen === 'cart' && (
        <CartScreen
          onProceedToCheckout={() => setCurrentScreen('checkout')}
          onItemCountChange={(count) => setCartCount(count)}
        />
      )}

      {currentScreen === 'checkout' && (
        <CheckoutScreen
          onBack={() => setCurrentScreen('cart')}
          onOrderSuccess={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen
          onOpenFitting={() => setCurrentScreen('ai_fitting')}
          onOpenOrders={() => setCurrentScreen('cart')}
        />
      )}

      {/* Docked Floating Bottom Tab Bar on Core Screens */}
      {isTabBarVisible && (
        <BottomTabBar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          cartCount={cartCount}
        />
      )}

      {/* 3D AR Try-On Modal */}
      <VirtualTryOnModal
        isOpen={isVirtualTryOnOpen}
        onClose={() => setIsVirtualTryOnOpen(false)}
        onAddToCart={(title) => handleAddToCart(title)}
      />
    </DeviceFrame>
  );
}
