package com.npci.springbootloanApplication.entity;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="customer_table")
public class CustomerTable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int customer_id;
	
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private long phone;
	private String pan;
	
	//this joins profile and contact table by matching primary key=foreign key with the help of @JoinColumn
		@OneToMany(cascade=CascadeType.ALL)
		@JoinColumn(name="customer_id_ref")
		private List<LoanApplicationTable> customerId_ref;
	
	public CustomerTable() {

	}
	
	public CustomerTable(int customer_id, String firstname, String lastname, String email, String password, long phone,
			String pan, List<LoanApplicationTable> customerId_ref) {
		super();
		this.customer_id = customer_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.pan = pan;
		this.customerId_ref = customerId_ref;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public List<LoanApplicationTable> getCustomerId_ref() {
		return customerId_ref;
	}

	public void setCustomerId_ref(List<LoanApplicationTable> customerId_ref) {
		this.customerId_ref = customerId_ref;
	}

	@Override
	public String toString() {
		return "CustomerTable [customer_id=" + customer_id + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", password=" + password + ", phone=" + phone + ", pan=" + pan
				+ ", customerId_ref=" + customerId_ref + "]";
	}
	
}
