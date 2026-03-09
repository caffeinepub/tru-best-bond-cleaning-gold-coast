import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ServiceType = {
    #bondCleaning;
    #carpetCleaning;
    #windowCleaning;
    #pestControl;
    #other : Text;
  };

  type Enquiry = {
    name : Text;
    phone : Text;
    email : Text;
    address : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    phone : Text,
    email : Text,
    address : Text,
    serviceType : ServiceType,
    message : Text,
  ) : async () {
    let enquiry : Enquiry = {
      name;
      phone;
      email;
      address;
      serviceType;
      message;
      timestamp = Time.now();
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (caller.toText() != "2vxsx-fae") {
      Runtime.trap("Access denied. Only admin can view all enquiries.");
    };
    enquiries.values().toArray();
  };
};
