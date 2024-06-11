package com.carlos.sales.service;

import com.carlos.sales.domain.products.Product;
import com.carlos.sales.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public List<Product> create(List<Product> products) {
        return productRepository.saveAll(products);
    }

    public List<Product> all() {
        return productRepository.findAll();
    }
}
