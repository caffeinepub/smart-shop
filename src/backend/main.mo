import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    id : Nat;
    name : Text;
    price : Nat;
    description : Text;
    category : Text;
    imageRef : Text;
  };

  module Product {
    public func compare(x : Product, y : Product) : Order.Order {
      Nat.compare(x.id, y.id);
    };
  };

  let products = Map.empty<Nat, Product>();

  type CartItem = {
    productId : Nat;
    quantity : Nat;
  };

  let carts = Map.empty<Principal, List.List<CartItem>>();

  func getCart(caller : Principal) : List.List<CartItem> {
    switch (carts.get(caller)) {
      case (null) { List.empty<CartItem>() };
      case (?cart) { cart };
    };
  };

  public shared ({ caller }) func addProduct(id : Nat, name : Text, price : Nat, description : Text, category : Text, imageRef : Text) : async () {
    let product : Product = {
      id;
      name;
      price;
      description;
      category;
      imageRef;
    };
    products.add(id, product);
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    let product = products.get(productId);
    if (product == null) { Runtime.trap("Product not found") };

    let cart = getCart(caller);
    cart.add({ productId; quantity });
    carts.add(caller, cart);
  };

  public query ({ caller }) func getCartContents() : async [CartItem] {
    getCart(caller).toArray();
  };

  public shared ({ caller }) func clearCart() : async () {
    carts.remove(caller);
  };
};
