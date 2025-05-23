// 购物小程序原型交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 底部导航切换
    const tabItems = document.querySelectorAll('.tab-item');
    
    if (tabItems.length > 0) {
        tabItems.forEach(item => {
            item.addEventListener('click', function() {
                // 移除所有激活状态
                tabItems.forEach(tab => tab.classList.remove('active'));
                // 添加当前激活状态
                this.classList.add('active');
                
                // 获取当前标签名称
                const tabName = this.querySelector('.tab-name').textContent;
                
                // 根据标签名称跳转到对应页面
                switch(tabName) {
                    case '首页':
                        window.location.href = 'index.html';
                        break;
                    case '分类':
                        window.location.href = 'category.html';
                        break;
                    case '购物车':
                        window.location.href = 'cart.html';
                        break;
                    case '我的':
                        window.location.href = 'profile.html';
                        break;
                }
            });
        });
    }
    
    // 商品卡片点击事件
    const productCards = document.querySelectorAll('.product-card');
    
    if (productCards.length > 0) {
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                window.location.href = 'product_detail.html';
            });
        });
    }
    
    // 购物车数量控制
    const quantityButtons = document.querySelectorAll('.quantity-button');
    
    if (quantityButtons.length > 0) {
        quantityButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentNode.querySelector('.quantity-input');
                let value = parseInt(input.value);
                
                if (this.textContent === '+') {
                    value++;
                } else if (this.textContent === '-' && value > 1) {
                    value--;
                }
                
                input.value = value;
                
                // 更新总价（实际应用中需要计算）
                updateCartTotal();
            });
        });
    }
    
    // 商品详情页选项卡切换
    const detailTabs = document.querySelectorAll('.detail-tab');
    
    if (detailTabs.length > 0) {
        detailTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                detailTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // 分类页侧边栏切换
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    if (sidebarItems.length > 0) {
        sidebarItems.forEach(item => {
            item.addEventListener('click', function() {
                sidebarItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // 购物车结算按钮
    const checkoutButton = document.querySelector('.checkout-button');
    
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('订单提交成功！');
        });
    }
    
    // 商品详情页加入购物车和立即购买按钮
    const addCartBtn = document.querySelector('.add-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');
    
    if (addCartBtn) {
        addCartBtn.addEventListener('click', function() {
            alert('商品已加入购物车！');
        });
    }
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    // 辅助函数：更新购物车总价
    function updateCartTotal() {
        const totalPrice = document.querySelector('.total-price');
        if (totalPrice) {
            // 实际应用中需要计算所有商品价格
            // 这里仅做演示
            const randomPrice = Math.floor(Math.random() * 100) + 300;
            totalPrice.textContent = '¥' + randomPrice;
        }
    }
});