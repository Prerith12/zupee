# Zupee - Modern Affiliate E-Commerce Platform

A high-performance affiliate e-commerce and deal discovery platform for showcasing products from **Meesho, Flipkart, Amazon, Myntra, Ajio**, and more, equipped with instant in-app checkout, multi-option UPI payment, and dual SMS order notifications.

---

## 🌟 Key Features

1. **Brand Identity**:
   - Website name: **Zupee**
   - Clean, modern purple-and-indigo theme inspired by India's top shopping platforms.
   - Mobile, tablet, and desktop responsive design.

2. **Zero-Product Clean Slate (As Requested)**:
   - Starts with 0 products so you have total control over the catalog.
   - Upload products anytime from the secret Admin Panel.

3. **In-App "Buy Now" Checkout (No External Redirects)**:
   - Clicking **Buy Now** immediately opens the dedicated checkout form.
   - Collects:
     - **Full Name**
     - **Phone Number** (10-digit mobile)
     - **House Name / Flat / Building**
     - **Place / City / Locality**
     - **Full Address & Landmark**
     - **Pincode** (6-digit postal code)

4. **Comprehensive UPI Payment Methods**:
   - **Google Pay (GPay)**
   - **PhonePe**
   - **BHIM / Paytm / Other UPI Apps**
   - **Enter UPI ID**: Input box to specify customer's VPA / UPI ID
   - **UPI QR Code Scanner**: Displays custom admin scanner image or dynamic amount QR code.
   - **Direct Mobile UPI Intent**: One-tap "Open UPI App" button for smartphones.

5. **Dual SMS Notifications**:
   - **Customer SMS**: *"Thank you for ordering your [Product Name] on Zupee! Your order ID is #[orderId]..."*
   - **Admin Alert to `9497088200`**: *"🚨 Zupee Alert: 1 person has ordered [Product Name] for ₹[Price]. Customer: [Name] ([Phone]), Place: [Place], House: [House], Address: [Address], Pincode: [Pincode], Payment: [PaymentMethod]..."*
   - Live floating SMS simulator toast for instant on-screen delivery verification.
   - Full SMS dispatch log recorded in the Admin Dashboard.
   - Integration ready for **Fast2SMS** and **Twilio**.

6. **Dedicated Admin Dashboard**:
   - **Separate Admin Login**: Accessible at `http://localhost:5173/admin/login`
   - **Sign In with Google**: One-click Google authentication option.
   - **Upload Item Tab**:
     - Product Name
     - Photo (File upload or Image URL)
     - Description
     - Original Price (MRP)
     - Offer Price (Selling Price)
     - Percentage Discount (% OFF auto-calculated or manual)
     - Category (Fashion, Electronics, Home & Kitchen, Beauty, Footwear, etc.)
     - Shopping Platform (Meesho, Flipkart, Amazon, Myntra, Ajio, Zupee Direct)
     - Original Affiliate URL
     - Mark as Featured / Trending / In Stock
   - **Manage Products**: Table with stock toggles, search, and delete actions.
   - **Customer Orders Tab**: Live stream of customer orders with delivery details, payment proof, and status management (Pending, Confirmed, Shipped, Delivered).
   - **UPI & Scanner Settings**: Upload custom UPI QR code scanner image, update receiving UPI ID, and configure admin phone number (`9497088200`).

---

## 🚀 Running Application URLs

- **Customer Website**: [http://localhost:5173](http://localhost:5173)
- **Admin Login Portal**: [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### Admin Credentials
- **Email**: `admin@zupee.com`
- **Password**: `admin123`
- **Or**: Click **"Sign in with Google"** for instant access
- **Admin Alert Phone**: `9497088200`

