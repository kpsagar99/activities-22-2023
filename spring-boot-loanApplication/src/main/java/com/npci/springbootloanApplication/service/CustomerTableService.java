package com.npci.springbootloanApplication.service;

import java.util.List;

import com.npci.springbootloanApplication.entity.CustomerTable;

public interface CustomerTableService {
	List<CustomerTable> fetchCustomers();
	CustomerTable storeCustomers(CustomerTable customer);
	CustomerTable fetchByCustomerId(String cust_email);
}
